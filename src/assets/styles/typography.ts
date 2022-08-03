// copied from https://github.com/20treeAI/explorer/tree/master/src/assets/styles
export const typography = {
  typography: {
    fontSize: '16px',
    fontFamily: { primary: '"Inter"', heading: '"Gilroy"' },
    size: {
      base: '16px',
      xxs: '10px',
      xs: '12px',
      sm: '14px',
      md: '18px',
      lg: '24px',
    },
    weight: {
      light: 300,
      regular: 400,
      medium: 500,
    },
    lineHeight: {
      sm: '24px',
      md: '24px',
      lg: '32px',
    },
  },
};

export const typographyVariants = () => {
  const weightLight = 300;
  const weightRegular = 400;
  const weightMedium = 500;

  const buildVariant = (
    fontSize: number,
    lineHeight: number,
    fontWeight: number,
    isHeading: boolean = false
  ) =>
    buildTypographyVariant(
      'Inter',
      'Gilroy',
      fontSize,
      lineHeight,
      fontWeight,
      isHeading
    );
  return {
    h1: buildVariant(56, 72, weightRegular, true),
    h2: buildVariant(48, 64, weightRegular, true),
    h3: buildVariant(32, 48, weightRegular, true),
    h4: buildVariant(24, 32, weightRegular, true),
    bodyLight: buildVariant(16, 24, weightLight),
    bodyRegular: buildVariant(16, 24, weightRegular),
    bodySmallLight: buildVariant(14, 24, weightLight),
    bodySmallRegular: buildVariant(14, 24, weightRegular),
    bodyMedium: buildVariant(16, 24, weightMedium),
    bodySmallMedium: buildVariant(14, 24, weightMedium),
    caption: buildVariant(12, 16, weightRegular),
    tiny: buildVariant(10, 16, weightRegular),
  };
};

const buildTypographyVariant = (
  fontFamilyHeading: string,
  fontFamilyBody: string,
  fontSize: number,
  lineHeight: number,
  fontWeight: number,
  isHeading: boolean = false
): TypographyVariant => ({
  fontFamily: isHeading ? fontFamilyHeading : fontFamilyBody,
  fontWeight,
  fontSize: `${fontSize} px`,
  lineHeight: `${lineHeight} px`,
});
export interface TypographyVariant {
  fontFamily: string;
  fontSize: string;
  fontWeight: number;
  lineHeight: string;
}
