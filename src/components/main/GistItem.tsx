import React from "react";
import styles from "./GistItem.module.scss";
import { ForksList } from "./ForksList";
import { Avatar } from "../ui/Avatar";

type Props = {
  item: Gist;
};

export const GistItem: React.FC<Props> = ({ item }) => {
  return (
    <div
        className={`${styles.cardWrapper} disp-flex flex-column flex-just--sb`}
    >
      <div className={`disp-flex ${styles.cardImgWrapper}`}>
        <Avatar
          imgUrl={item.owner.avatar_url}
          imgAlt={item.owner.login}
        />
        <div className={`disp-flex flex-column ${styles.cardInfo}`}>
          {item.description}
        </div>
      </div>
      <div className="disp-flex flex-align--center">
        { item.files && Object.values(item.files).map((file: FileType, id: number) =>
            <span
              key={id}
              className={`${styles.tag} mar-lft--5`}
            >
              {file.language}
            </span>
        )}
      </div>
      <div>
        <ForksList forks={item.forks}/>
      </div>
    </div>
  );
};
