type FontOptions = {
  variable?: string;
  subsets?: string[];
  weight?: string[];
};

type FontResult = {
  className: string;
  style: {
    fontFamily: string;
  };
  variable: string;
};

function createFont(fontFamily: string) {
  return function loadFont(options: FontOptions = {}): FontResult {
    return {
      className: "",
      style: { fontFamily },
      variable: options.variable ?? "",
    };
  };
}

export const Sora = createFont('"Sora", sans-serif');
export const Manrope = createFont('"Manrope", sans-serif');
