export type ImageProps = {
    src: string,
    alt: string,
    width: number,
    height: number
}

const Image = (props: ImageProps) => {
    const {src, alt, height, width} = props
    return (
        <img
            className={'cursor-pointer'}
            src={src}
            alt={alt}
            width={width}
            height={height}
        />
    );
};

export default Image;
