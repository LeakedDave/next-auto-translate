import { useTranslations, useLocale, useMessages } from 'next-intl';
import React, { useContext, useEffect, useState } from 'react';
import { AutoTranslateContext } from './AutoTranslateProvider';

const isDev = process.env.NODE_ENV === 'development';


export const AutoTranslate = ({ tKey, children, namespace }) => {
    const { pathname, defaultLocale, locales, debug, addToQueue } = useContext(AutoTranslateContext);
    const locale = useLocale()
    const [initialized, setInitialized] = useState(false)
    const [loading, setLoading] = useState(isDev)
    const messages = useMessages()

    // If no locales provided, throw getTranslationProps error
    if (!locales && (debug || isDev) && typeof window !== 'undefined') {
        console.error(`[AutoTranslate]
Missing required props in AutoTranslateProvider: locales & defaultLocale
        
-- You must export 'getTranslationProps' to use AutoTranslate on this Page --

Example:

import { getTranslationProps } from 'next-auto-translate/server'

export async function getStaticProps(context) {
    return {
        props: {
            ...await getTranslationProps(context)
        }
    };
}
`)
    }

    let usePathname = pathname

    // If no pathname provided, use window.location.pathname
    if (!pathname && typeof window !== 'undefined') {
        usePathname = window.location.pathname
    }

    // Get namespace from pathname, which is the first part of the pathname
    let startPath = usePathname.replace("/" + locale, "").split("/")[1]

    // If path is empty, use index
    if (startPath.length == 0) {
        startPath = "index"
    }

    // If no namespace provided, use the pathname
    if (!namespace) {
        namespace = startPath
    }

    // Only automatically run translations in dev mode
    if (isDev) {
        const checkTranslations = () => {
            if (debug) {
                console.log("[AutoTranslate] Namespace: ", namespace)
            }

            setLoading(true)

            fetch(`/api/translate/check`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    namespace,
                    tKey,
                    message: children,
                    locales,
                    defaultLocale
                })
            }).then(response => response.json()).then(data => {
                if (data.run_translate) {
                    addToQueue({ namespace, tKey, message: children });

                    setLoading(false);
                } else {
                    if (isDev || debug) {
                        console.log(`[AutoTranslate] ${namespace}.${tKey} Translations already exist! 😎`)
                    }

                    setLoading(false)
                }

                setInitialized(true)
            }).catch(err => {
                console.error(err);
                setLoading(false)
            });
        };

        useEffect(() => {
            if (initialized) {
                setLoading(true)
                checkTranslations()
            }
        }, [children, messages, locales])

        useEffect(() => {
            if (!initialized) {
                checkTranslations()
            }
        }, [])
    }


    if (!messages[namespace]) {
        return children
    }

    return (
        <>
            {messages[namespace][tKey] || children}
        </>
    )
}