import React from 'react'
import { IImageLinkProps, } from '../services/types/sharedTypes'
import { ImageWrapperLink, SocialImage } from '../styles/sharedStyles'


const Image = ({ src, alt = '', to, width, height }: IImageLinkProps) => {
      const image = <SocialImage src={src} alt={alt} style={{ width, height }} />;
      return to ? <ImageWrapperLink to={to}>{image}</ImageWrapperLink> : image;
};

export default Image