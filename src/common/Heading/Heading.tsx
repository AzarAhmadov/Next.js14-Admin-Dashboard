'use client'

import React from 'react';
import styles from './Heading.module.css';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Heading: React.FC = () => {
    const pathName = usePathname();
    const normalizedPath = pathName.replace(/-\d+/g, '');

    const getPathParts = () => {    
        const pathParts = normalizedPath.substring(1).split('/');
        return pathParts.filter(part => !['en', 'az'].includes(part));
    };

    return (
        <div className={styles.banner}>
            <ul className={`${styles.list} container font-poppions-light`}>
                <li>
                    <Link href='/'> Home </Link>
                    <span className={styles.circle}></span>
                </li>
                <li>
                    {getPathParts().map((part, index, partsArray) => (
                        <React.Fragment key={index}>
                            {index > 0 && <span className={styles.circle}></span>}
                            {index === partsArray.length - 1 ? (
                                <span className={styles.span}>
                                    <span className={styles.span}>
                                        {part.length > 22 ? part.slice(0, 22) + '...' : part}
                                    </span>
                                </span>
                            ) : (
                                <Link href={part === 'Vacancies' ? '/' : `/${part}`}>
                                    {part}
                                </Link>
                            )}
                        </React.Fragment>
                    ))}
                </li>
            </ul>
        </div>
    );
};

export default Heading;
