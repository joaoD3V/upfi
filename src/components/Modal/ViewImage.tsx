import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  Image,
  Link,
  Flex,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  // TODO MODAL WITH IMAGE AND EXTERNAL LINK
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <Flex width="100%" flexDir="column">
          <Image src={imgUrl} alt="Foto" maxW="900px" maxHeight="600px" />
          <ModalFooter bg="pGray.800" h="32px" pl="10px">
            <Link
              color="pGray.50"
              fontSize={14}
              href={imgUrl}
              target="_blank"
              w="100%"
            >
              Abrir original
            </Link>
          </ModalFooter>
        </Flex>
      </ModalContent>
    </Modal>
  );
}
