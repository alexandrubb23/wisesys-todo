import { Image } from '@chakra-ui/react';

interface UserAvatarProps {
  alt: string;
  src: string;
  boxSize?: number;
}

const UserAvatar = ({ alt, boxSize = 30, src }: UserAvatarProps) => (
  <Image borderRadius='full' boxSize={boxSize} src={src} alt={alt} ml={2} />
);

export default UserAvatar;
