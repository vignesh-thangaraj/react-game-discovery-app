import noImageLogo from '../assets/no-image-placeholder.webp'
const getCroppedImage = (url: string) => url === null ? noImageLogo : url.replace('media/', 'media/crop/600/400/')

export default getCroppedImage;