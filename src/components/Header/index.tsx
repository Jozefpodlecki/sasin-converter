import {
    faInfo,
    faVolumeMute,
    faVolumeUp,
} from "@fortawesome/free-solid-svg-icons";
import { getMusic } from "api";
import { setAudio, setInteracted } from "store/actions";
import { useDispatch } from "react-redux";
import { useInitialInteraction } from "hooks/useInitialInteraction";
import { useSelector } from "store/useSelector";
import Icon from "components/Icon";
import InfoDialog from "components/InfoDialog";
import React, { FunctionComponent, useEffect, useState } from "react";

import style from "./style.scss";

const Header: FunctionComponent = () => {
    const { canPlay, hasInteracted } = useSelector((state) => state.page);
    const dispatch = useDispatch();
    useInitialInteraction(onInteraction);
    const [show, setDialog] = useState(false);
    const [audio, setAudioElement] = useState<HTMLAudioElement | undefined>();

    useEffect(() => {
        if (hasInteracted && canPlay) {
            if (!audio) {
                playMusic();
            } else {
                audio.play();
            }
        } else if (!canPlay && audio) {
            audio.pause();
        }
    }, [audio, hasInteracted, canPlay]);

    const playMusic = async () => {
        const { default: src } = await getMusic();

        const audio = new Audio(src);
        audio.addEventListener("ended", replay);

        audio.onloadedmetadata = function () {
            audio.play();
        };

        setAudioElement(audio);
    };

    const replay = (event: Event) => {
        const audio = event.target as HTMLAudioElement;
        audio.currentTime = 0;
        audio.play();
    };

    function onInteraction() {
        dispatch(setInteracted());
    }

    const onSoundToggle = () => {
        dispatch(setAudio(!canPlay));
    };

    const onInfoClick = () => {
        setDialog(true);
    };

    const onClose = () => {
        setDialog(false);
    };

    return (
        <div className={style.header}>
            <div className={style.header__soundToggle} onClick={onSoundToggle}>
                {hasInteracted ? (
                    <Icon icon={canPlay ? faVolumeUp : faVolumeMute} />
                ) : null}
            </div>
            <div className={style.header__info} onClick={onInfoClick}>
                <Icon icon={faInfo} />
            </div>
            <InfoDialog show={show} onClose={onClose} />
        </div>
    );
};

export default Header;
