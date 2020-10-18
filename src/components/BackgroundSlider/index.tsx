import { getImages } from "api";
import React, { FunctionComponent, ReactNode, useEffect, useState } from "react";
import { animated, useSpring, useTransition } from "react-spring";

import style from "./style.scss";

const BackgroundSlider: FunctionComponent = () => {
    const [{images, isLoading, index}, setState] = useState({
        images: [],
        isLoading: true,
        index: -1,
    });
    const transitions = useTransition(images.filter((pr, ind) => ind === index), item => item.id, {
        from: {
            opacity: 0,
            transform: "scale(1.1)",
        },
        enter: {
            opacity: 1,
            transform: "scale(1)",
        },
        leave: {
            opacity: 0,
            transform: "scale(0.9)",
        }
    })
    
    useEffect(() => {
        getImages().then(images => {
            setState({
                images,
                index: 0,
                isLoading: false,
            });
        })
    }, []);

    useEffect(() => {

        if(!images) {
            return;
        }

        let handle: any;
        let interval = 20000;

        const callback = () => {

            let newIndex = Math.floor(Math.random() * images.length);

            while(index === newIndex) {
                newIndex = Math.floor(Math.random() * images.length);
            }

            const randomImage = images[newIndex];

            const image = new Image();
            image.src = randomImage.url;
            image.onload = () => {
                setState(state => ({...state, index: newIndex}));
            }
            
            handle = setTimeout(callback, interval);
        }

        handle = setTimeout(callback, interval);

        return () => {
            clearTimeout(handle);
        }
    }, [images])

    if(isLoading) {
        return null;
    }

    return <>{transitions.map(({item, props, key}) => 
        <animated.div
            key={key}
            className={style.background}
            style={{
                backgroundImage: `url(${item.url})`,
                opacity: props.opacity,
            }}>
    </animated.div>)}</>
};

export default BackgroundSlider;