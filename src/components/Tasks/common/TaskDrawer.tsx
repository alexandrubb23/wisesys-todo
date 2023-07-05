import {
  Button,
  ComponentWithAs,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  IconProps,
  ThemeTypings,
  useDisclosure,
} from '@chakra-ui/react';
import React, { useRef } from 'react';

import { TaskDrawerContext } from '@/components/Tasks/context';

interface TaskFormProps {
  buttonColorScheme: ThemeTypings['colorSchemes'];
  buttonIcon: ComponentWithAs<'svg', IconProps>;
  buttonLabel: string;
  children: React.ReactNode;
  header: string;
}

const TaskDrawer = ({
  buttonColorScheme,
  buttonIcon: ButtonIcon,
  buttonLabel,
  children,
  header,
}: TaskFormProps) => {
  const firstField = useRef<HTMLInputElement>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        colorScheme={buttonColorScheme}
        onClick={onOpen}
        leftIcon={<ButtonIcon />}
      >
        {buttonLabel}
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        initialFocusRef={firstField}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>{header}</DrawerHeader>

          <DrawerBody>
            <TaskDrawerContext.Provider
              value={{
                firstField,
                onClose,
              }}
            >
              {children}
            </TaskDrawerContext.Provider>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default TaskDrawer;
