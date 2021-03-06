export enum flexAlign {
  auto = "auto",
  top = "flex-start",
  bottom = "flex-end",
  center = "center",
}

export type HeroBackdropProps = {
  height?: string
  mode?: "dark" | "light"
}

export type HeroContainerProps = {
  verticalAlign?: keyof typeof flexAlign
}
