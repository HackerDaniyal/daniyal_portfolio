"use client";

import React from "react";
import Image from "next/image";
import styles from "./AvatarCircles.module.css";

interface Avatar {
    imageUrl: string;
    profileUrl: string;
}

interface AvatarCirclesProps {
    numPeople?: number;
    avatarUrls: Avatar[];
}

export const AvatarCircles = ({
    numPeople,
    avatarUrls,
}: AvatarCirclesProps) => {
    return (
        <div className={styles.container}>
            <div className={styles.avatarStack}>
                {avatarUrls.map((url, index) => (
                    <a
                        key={index}
                        href={url.profileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.avatar}
                    >
                        <Image
                            className={styles.avatarImg}
                            src={url.imageUrl}
                            width={40}
                            height={40}
                            alt={`Avatar ${index + 1}`}
                            unoptimized
                        />
                    </a>
                ))}
                {(numPeople !== undefined && numPeople > 0) && (
                    <div className={styles.count}>
                        +{numPeople}
                    </div>
                )}
            </div>
        </div>
    );
};
