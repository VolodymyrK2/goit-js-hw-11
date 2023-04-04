function scrollPage() {
        const cardHeight = 230;
        window.scrollBy({
            top: cardHeight * 2,
            behavior: "smooth",
        })
    
}
function onScroll() {
    scrollPage();
//     if (window.pageYOffset >= document.documentElement.scrollHeight - window.innerHeight) {
//         pageState += 1;
//         clearGallery();
//     loadImages(searchState,pageState);
//   }
}