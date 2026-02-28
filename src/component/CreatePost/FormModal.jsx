import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  Textarea,
} from "@heroui/react";
import { useRef, useState } from "react";
import { FaFileImage } from "react-icons/fa6";
import {createPost} from '../../services/postServices';
import { toast } from "react-toastify";
import { useQueryClient } from "@tanstack/react-query";





export default function FormModal({isOpen,onOpenChange}) {

    const [displayedPhoto, setDisplayedPhoto] = useState('');
    const [sendPhoto, setSendPhoto] = useState('');
    const [postContent, setPostContent] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const queryClient =  useQueryClient()

    const inputPhoto = useRef();

    function handelUploadImage(){
        inputPhoto.current.click()
    }
    function handelSelectedImage(){
        //format for photo to send to the end point
        setSendPhoto(inputPhoto.current.files[0])
        //format  to display photo
        setDisplayedPhoto(URL.createObjectURL(inputPhoto.current.files[0]))
    }

    async function handelFetchingPost() {
  try {
    setIsLoading(true);

    if (!postContent.trim() && !sendPhoto) {
      toast.error("Post cannot be empty");
      return;
    }

    const formData = new FormData();

    if (postContent.trim()) {
      formData.append("body", postContent);
    }

    if (sendPhoto instanceof File) {
      formData.append("image", sendPhoto);
    }

    const response = await createPost(formData);

    toast.success(response.data.message);

    queryClient.invalidateQueries({ queryKey: ["getPosts"] });

    onOpenChange();

    // reset
    setPostContent("");
    setSendPhoto(null);
    setDisplayedPhoto("");

  } catch (error) {
    console.log(error.response?.data); 
    toast.error(error.response?.data?.message || "Post Not Created");
  } finally {
    setIsLoading(false);
  }
}
  return (
    <>
     
      <Modal isOpen={isOpen} placement="top-center" onOpenChange={()=>{
        onOpenChange();
        setDisplayedPhoto("")
      }}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Create Post</ModalHeader>
              <ModalBody>
               <Textarea onChange={(e)=>setPostContent(e.target.value)} minRows={displayedPhoto ? "0" :"50"}  placeholder="What On Your Mind ?" />
               {displayedPhoto && <img className="mx-auto h-[300px] w-1/2" src={displayedPhoto} />}
                
                <div className="flex py-2 px-1 items-center gap-2">
                <p>Upload a Photo</p>
                <FaFileImage onClick={()=>handelUploadImage()} className=" cursor-pointer"  />
                <Input ref={inputPhoto} onInput={()=>handelSelectedImage()} type="file" className=" hidden"/>
                  
                  
                </div>
              </ModalBody>
              <ModalFooter>
                
                <Button onClick={()=>handelFetchingPost()} isLoading={isLoading} className="w-full" color="primary" onPress={onClose}>
                   post
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
