import { MenuLink } from '@/components/MenuLink';
import { useState } from 'react';

export function TwitterFeedHeader({tittle}: {tittle: string}) {
    const [links, setLinks] = useState([
        {
            name:'For You',
            active: true
        },
        {
            name:'Following',
            active: false
        }
    ])
    return (
        <>
            <div
                className="h-fit col-span-2 capitalize font-bold text-xl p-3 cursor-pointer"
            >
                {tittle}
            </div>
            {links.map(({name, active}) => {
                return (
                    <div 
                        key={name}
                        onClick={event => {
                            const divEl = (event.target as HTMLDivElement)
                            setLinks(() => ([
                                {name: 'For You', active: (divEl.textContent === 'For You')},
                                {name: 'Following', active: (divEl.textContent === 'Following')}
                            ]))
                        }}
                    >
                        <MenuLink linkName={name} activeLink={active} />
                    </div>
                )
            })}
        </>
    )
}