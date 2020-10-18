import { ImageItem } from "models/ImageItem";
import { Module } from "models/Module";

const importAll = (context: __WebpackModuleApi.RequireContext) => {
    return Promise.all<ImageItem>(context.keys()
        .map(key => context<Promise<Module>>(key).then(module => ({
            id: key,
            url: module.default,
        }))));
}

const backgroundImagescontext = require.context("./../assets/images/background", false, /\.(png|jpe?g|svg)$/, "lazy");
const imagesContext = require.context("./../assets/images/", false, /\.(png|jpe?g|svg)$/, "lazy");

const sasinRatio = 7 * Math.pow(10, 6);

export const getSasinRatio = () => Promise.resolve(sasinRatio);

export const getImages = () => importAll(backgroundImagescontext);

export const getInterestingFacts = () => import("assets/data/interestingFacts.json");

export const getMusic = () => import("assets/music/gta-san-adreas-theme-song.mp3") as Promise<Module>;

export const getInfo = async() => {
    const { image: imagePath, description } = await import("assets/data/info.json");
    const images = await importAll(imagesContext);
    const { url: image } = images.find(pr => pr.id === imagePath);

    return {
        description,
        image,
    }
}

export const saveToClipboard = (text: string) => navigator
    .clipboard
    .writeText(text);

export const getSettings = () => JSON.parse(localStorage.getItem("settings")) || {};

export const setSettings = (object: any) => localStorage.setItem("settings", JSON.stringify(object));