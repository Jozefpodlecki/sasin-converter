import { faGithub } from "@fortawesome/free-brands-svg-icons";
import React, { FunctionComponent } from "react";

import style from "./style.scss";
import Icon from "components/Icon";
import { useSelector } from "store/useSelector";

const Footer: FunctionComponent = () => {
	const { link } = useSelector(state => state.page);

	return <div className={style.footer}>
		<div className={style.footer__github}>
			<a href={link}>
				<Icon icon={faGithub} size="2x"/>
			</a>
		</div>
		
	</div>
  };
  
  export default Footer;