import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import 'react-modal-video/scss/modal-video.scss';

const AppointmentArea = () => {
    const [isOpen, setOpen] = useState(false);
    return (
        <>
            <ModalVideo channel='youtube' autoplay isOpen={isOpen}
                videoId="I3u3lFA9GX4" onClose={() => setOpen(false)} />

        </>
    );
};

export default AppointmentArea;