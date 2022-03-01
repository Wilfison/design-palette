import Color from "color";

const getColorText = (text, colorType) => {
  const color = Color(text)

  switch (colorType) {
    case 'rgb':
      const rgb = color.rgb().array().join(', ')
      return `rgb(${rgb})`
    case 'rgba':
      const rgba = color.rgb().array().join(', ')
      return `rgba(${rgba}, 1)`
    default:
      return text
  }
}

export async function copyColorToClipboardAsync(text, colorType) {
  const colorText = getColorText(text, colorType)

  if ('clipboard' in navigator) {
    return await navigator.clipboard.writeText(colorText);
  } else {
    return document.execCommand('copy', true, colorText);
  }
}
