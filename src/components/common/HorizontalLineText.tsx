import { Box, Text } from '@chakra-ui/react';

type Position = 'center' | 'left' | 'right';

interface TextWithHorizontalLineProps {
  fontSize?: string;
  fontWeight?: string;
  lineColor?: string;
  text: string;
  textAlign?: Position;
  textBackgroundColor?: string;
  textColor?: string;
}

const HorizontalLineText = ({
  text,
  lineColor = 'owkin.grey',
  textColor = 'owkin.black',
  textAlign = 'center',
  fontSize = '16px',
  fontWeight = 'normal',
  textBackgroundColor = 'transparent',
}: TextWithHorizontalLineProps) => {
  return (
    <Box
      borderBottom={1}
      borderColor={lineColor}
      borderWidth={1}
      lineHeight='0.1em'
      textAlign={textAlign}
      width='100%'
    >
      <Text
        as='span'
        color={textColor}
        data-testid={`horizontal-line-${text}-text`}
        fontSize={fontSize}
        fontWeight={fontWeight}
        backgroundColor={textBackgroundColor}
        padding='0 10px'
        position='relative'
        top='-2px'
      >
        {text}
      </Text>
    </Box>
  );
};

export default HorizontalLineText;
