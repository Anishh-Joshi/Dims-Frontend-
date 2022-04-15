import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';


mapboxgl.accessToken = 'pk.eyJ1IjoiYW5pc2hoLWpvc2hpIiwiYSI6ImNrdWo5d2lhdDFkb2oybnJ1MDB4OG1oc2EifQ.pLrp8FmZSLVfT3pAVVPBPg';

function WorldMap({response}) {
    const mapContainer = useRef(null);
    const map = useRef(null);

    


    useEffect(() => {

        
        console.log("HERE") // initialize map only once
        map.current = new mapboxgl.Map({
            attributionControl: false,
            renderWorldCopies: true,
            container: mapContainer.current,
            style: 'mapbox://styles/anishh-joshi/ckuktm1924ltz18ods3zrhus5',
            center: [35, 46],
            zoom: 1
        });

        


        response.forEach(e=>{
            console.log(e)
            new mapboxgl.Marker({

            }).setLngLat([
                e.lng,e.lat
            ])
            .setPopup(new mapboxgl.Popup({offset:30})
            .setHTML(`<h4> ${e.news} </h4>`)
            )
            
            .addTo(map.current);
            return 0;
        })
           
        map.current.addControl(new mapboxgl.NavigationControl());
        map.current.scrollZoom.disable();
        map.current.doubleClickZoom.disable();

    });


    

    return (
        <div className='map-wrapper'>
            <div ref={mapContainer} className="map-container" style={{ height: '100vh', width: "100%" }} />
        </div>

    )
}

export default WorldMap
