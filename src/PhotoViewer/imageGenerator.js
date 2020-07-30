const brokenImages = [
    1, 24, 32, 36, 44, 47
];

function getImageUrls() {
    const urls = [];

    for (let i = 0; i < 50; i++) {
        if (!brokenImages.includes(i)) {
            const imageNumString = i.toString().padStart(2, '0');
            urls.push(`https://picsum.photos/id/6${imageNumString}/1600/900`)
        }
    }

    return urls;
}

export const ImageUrls = getImageUrls();
