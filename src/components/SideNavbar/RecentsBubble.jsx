import React from 'react'
import './sidenavbar.css';

function RecentsBubble({recentTitle}) {
    return (
        <div className='recents-bubble'>
            <div className='container'>
                <div className="recents-avatar">
                C
                </div>
                <h1 className='recents-title'>{recentTitle}</h1>

            </div>

        </div>
    )
}

export default RecentsBubble
