import { Types } from "../actionType";
import { client } from "../../network";

export const loadHomeScreenAction = (data) => ({
  type: Types.LOAD_HOME_SCREEN,
  payload: data,
});

const homeScreenEndPoints = {
  smartphone: 'products/category/smartphones?limit=6',
  laptops: 'products/category/laptops?limit=6',
  skincare: 'products/category/skincare?limit=6',
  women_dresses: 'products/category/womens-dresses?limit=6',
  men_shirt: 'products/category/mens-shirts?limit=7',
  home_decoration: 'products/category/home-decoration?limit=6',
  furniture: 'products/category/furniture?limit=6',
};

export const loadHomeScreen = () => (dispatch) => {
  return new Promise((resolve, reject) => {
    const title = Object.keys(homeScreenEndPoints);
    const finalResponse = {};
    title.forEach(endPoint => {
      return client
        .get(homeScreenEndPoints[endPoint])
        .then(response => {
          if (response.total === null) {
            throw new Error('Unable to fetch ' + endPoint + ' Products');
          }
          finalResponse[endPoint] = response.products;
          if (Object.keys(homeScreenEndPoints).length === Object.keys(finalResponse).length) {
            dispatch(loadHomeScreenAction(JSON.stringify(finalResponse)));
            resolve(finalResponse);
          }
        })
        .catch(error => {
          reject(error);
        });
    });
  });
};