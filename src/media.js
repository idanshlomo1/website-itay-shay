// // Define an array of all categories
// const categories = ['logos', 'posts', '3dLogos', 'digicards', 'flyers', 'invitations', 'priceLists', 'visitCards', 'websites'];

// // Initialize an empty array to store data for all categories
// const imagesData = [];

// // Iterate over each category and populate the data array
// categories.forEach(category => {
//     const context = require.context(`../images/${category}`, false, /\.(jpg|jpeg|png)$/);
//     context.keys().forEach(imagePath => {
//         imagesData.push({
//             src: context(imagePath),
//             filter: category
//         });
//     });
// });

// export { imagesData };



const logos = [];
const logoImageContext = require.context('./images/logos', false, /\.(jpg|jpeg|png)$/);
logoImageContext.keys().forEach((logoImagePath, index) => {
    logos.push({
        src: logoImageContext(logoImagePath),
        filter: "logos"
    });
});


const posts = [];
const postsImageContext = require.context('./images/posts', false, /\.(jpg|jpeg|png)$/);
postsImageContext.keys().forEach((postImagePath, index) => {
    posts.push({
        src: postsImageContext(postImagePath),
        filter: "posts"
    });
});


const logos3D = [];
const logos3DImageContext = require.context('./images/logos3D', false, /\.(jpg|jpeg|png)$/);
logos3DImageContext.keys().forEach((logoImagePath, index) => {
    logos3D.push({
        src: logos3DImageContext(logoImagePath),
        filter: "logos3D"
    });
});


// const digicards = [];
// const digicardsImageContext = require.context('./images/digicards', false, /\.(jpg|jpeg|png)$/);
// digicardsImageContext.keys().forEach((digicardImagePath, index) => {
//     digicards.push({
//         src: digicardsImageContext(digicardImagePath),
//         filter: "digicards"
//     });
// });

const flyers = [];
const flyersImageContext = require.context('./images/flyers', false, /\.(jpg|jpeg|png)$/);
flyersImageContext.keys().forEach((flyerImagePath, index) => {
    flyers.push({
        src: flyersImageContext(flyerImagePath),
        filter: "flyers"
    });
});

const invitations = [];
const invitationsImageContext = require.context('./images/invitations', false, /\.(jpg|jpeg|png)$/);
invitationsImageContext.keys().forEach((invitationImagePath, index) => {
    invitations.push({
        src: invitationsImageContext(invitationImagePath),
        filter: "invitations"
    });
});

const priceLists = [];
const priceListsImageContext = require.context('./images/priceLists', false, /\.(jpg|jpeg|png)$/);
priceListsImageContext.keys().forEach((priceListImagePath, index) => {
    priceLists.push({
        src: priceListsImageContext(priceListImagePath),
        filter: "priceLists"
    });
});

const visitCards = [];
const visitCardsImageContext = require.context('./images/visitCards', false, /\.(jpg|jpeg|png)$/);
visitCardsImageContext.keys().forEach((visitCardImagePath, index) => {
    visitCards.push({
        src: visitCardsImageContext(visitCardImagePath),
        filter: "visitCards"
    });
});

const websites = [];
const websitesImageContext = require.context('./images/websites', false, /\.(jpg|jpeg|png)$/);
websitesImageContext.keys().forEach((websiteImagePath, index) => {
    websites.push({
        src: websitesImageContext(websiteImagePath),
        filter: "websites"
    });
});



const imagesData = [...logos3D, ...posts, ...logos, ...flyers, ...invitations, ...priceLists, ...visitCards, ...websites];



const beauty = [];
const beautyImageContext = require.context('./images/digicards/beauty', false, /\.(jpg|jpeg|png)$/);
beautyImageContext.keys().forEach((beautyImagePath, index) => {
    beauty.push({
        src: beautyImageContext(beautyImagePath),
        filter: "beauty"
    });
});

const design = [];
const designImageContext = require.context('./images/digicards/design', false, /\.(jpg|jpeg|png)$/);
designImageContext.keys().forEach((designImagePath, index) => {
    design.push({
        src: designImageContext(designImagePath),
        filter: "design"
    });
});

const food = [];
const foodImageContext = require.context('./images/digicards/food', false, /\.(jpg|jpeg|png)$/);
foodImageContext.keys().forEach((foodImagePath, index) => {
    food.push({
        src: foodImageContext(foodImagePath),
        filter: "food"
    });
});

const production = [];
const productionImageContext = require.context('./images/digicards/production', false, /\.(jpg|jpeg|png)$/);
productionImageContext.keys().forEach((productionImagePath, index) => {
    production.push({
        src: productionImageContext(productionImagePath),
        filter: "production"
    });
});

const imagesDigicard = [...beauty, ...design, ...food, ...production];

export { imagesData, imagesDigicard };