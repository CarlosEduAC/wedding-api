export interface Image {
  id: string
  link: string
  alt: string
  created_at?: Date
  updated_at?: Date
}


export interface Images {
  images: Image[]
}
