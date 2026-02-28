const Defult_User = "../../assets/navbar/r9.png"


export function getCurrentTime(iso){
const date = new Date(iso).toLocaleString()
return date
}


export function getAvatar(photo){
  return photo && photo.includes("undefined") ? Defult_User : photo ;
}


export function handelPostWithoutImage(image,post){
      if(!image){
        return <>
          <div className='w-full h-[200px] bg-blue-500 text-white flex items-center justify-center'>
            <p className='text-3xl capitalize'>{post}</p>
          </div>
        </>
      }
}