export const Header = () => {
    const imageObject = {
        imgUrl: "https://yearofwater.columbia.edu/sites/default/files/styles/cu_crop/public/content/wave-hero.jpg?itok=EaB6JG-1",
        imgAlt: "Image of water"
    }
    const headerText = "New releases"

    return (
        < header >
        <img src= {imageObject.imgUrl} alt={imageObject.imgAlt} />
    <p>{headerText}</p>
    </header >
    )
};
