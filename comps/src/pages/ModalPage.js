import { useState } from "react";
import Button from "../components/Button";
import Modal from "../components/Modal";

function ModalPage() {
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    }
    const handleClose = () => {
        setShowModal(false);
    }
    const actionBar = (
        <div>
            <Button primary onClick={handleClose}>I Accept</Button>
        </div>
    )
    const modal = (
        <Modal onClose={handleClose} actionBar={actionBar}>
            <p>
                Here is an important agreement for you to accept
            </p>
        </Modal>
    )
    return (
        <div>
            <Button success onClick={handleClick}>Open Modal</Button>
            {showModal && modal}
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae condimentum augue. Suspendisse congue magna quis diam cursus, in aliquam lorem venenatis. Pellentesque feugiat felis eget risus ultrices, pharetra tempor massa placerat. Proin non metus lectus. Vestibulum luctus suscipit mauris, at porttitor odio facilisis in. Vivamus eleifend sapien risus. Phasellus bibendum, tortor id tincidunt cursus, mi dolor facilisis felis, nec iaculis lorem mauris vel tortor. Fusce ullamcorper est fringilla risus semper, at bibendum tortor molestie. Aliquam tempor mi quis nibh suscipit, et facilisis ligula fermentum. Ut condimentum nulla quis fermentum fermentum. Pellentesque felis nisi, fermentum in quam iaculis, cursus porttitor tortor. Suspendisse convallis ligula non odio volutpat, sit amet faucibus diam dignissim. Curabitur ut mauris a erat ultricies tincidunt eu sed nisi. Ut iaculis tortor et dictum lobortis. Donec ut leo enim. Vivamus vitae laoreet risus, ut varius mauris.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae condimentum augue. Suspendisse congue magna quis diam cursus, in aliquam lorem venenatis. Pellentesque feugiat felis eget risus ultrices, pharetra tempor massa placerat. Proin non metus lectus. Vestibulum luctus suscipit mauris, at porttitor odio facilisis in. Vivamus eleifend sapien risus. Phasellus bibendum, tortor id tincidunt cursus, mi dolor facilisis felis, nec iaculis lorem mauris vel tortor. Fusce ullamcorper est fringilla risus semper, at bibendum tortor molestie. Aliquam tempor mi quis nibh suscipit, et facilisis ligula fermentum. Ut condimentum nulla quis fermentum fermentum. Pellentesque felis nisi, fermentum in quam iaculis, cursus porttitor tortor. Suspendisse convallis ligula non odio volutpat, sit amet faucibus diam dignissim. Curabitur ut mauris a erat ultricies tincidunt eu sed nisi. Ut iaculis tortor et dictum lobortis. Donec ut leo enim. Vivamus vitae laoreet risus, ut varius mauris.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae condimentum augue. Suspendisse congue magna quis diam cursus, in aliquam lorem venenatis. Pellentesque feugiat felis eget risus ultrices, pharetra tempor massa placerat. Proin non metus lectus. Vestibulum luctus suscipit mauris, at porttitor odio facilisis in. Vivamus eleifend sapien risus. Phasellus bibendum, tortor id tincidunt cursus, mi dolor facilisis felis, nec iaculis lorem mauris vel tortor. Fusce ullamcorper est fringilla risus semper, at bibendum tortor molestie. Aliquam tempor mi quis nibh suscipit, et facilisis ligula fermentum. Ut condimentum nulla quis fermentum fermentum. Pellentesque felis nisi, fermentum in quam iaculis, cursus porttitor tortor. Suspendisse convallis ligula non odio volutpat, sit amet faucibus diam dignissim. Curabitur ut mauris a erat ultricies tincidunt eu sed nisi. Ut iaculis tortor et dictum lobortis. Donec ut leo enim. Vivamus vitae laoreet risus, ut varius mauris.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae condimentum augue. Suspendisse congue magna quis diam cursus, in aliquam lorem venenatis. Pellentesque feugiat felis eget risus ultrices, pharetra tempor massa placerat. Proin non metus lectus. Vestibulum luctus suscipit mauris, at porttitor odio facilisis in. Vivamus eleifend sapien risus. Phasellus bibendum, tortor id tincidunt cursus, mi dolor facilisis felis, nec iaculis lorem mauris vel tortor. Fusce ullamcorper est fringilla risus semper, at bibendum tortor molestie. Aliquam tempor mi quis nibh suscipit, et facilisis ligula fermentum. Ut condimentum nulla quis fermentum fermentum. Pellentesque felis nisi, fermentum in quam iaculis, cursus porttitor tortor. Suspendisse convallis ligula non odio volutpat, sit amet faucibus diam dignissim. Curabitur ut mauris a erat ultricies tincidunt eu sed nisi. Ut iaculis tortor et dictum lobortis. Donec ut leo enim. Vivamus vitae laoreet risus, ut varius mauris.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae condimentum augue. Suspendisse congue magna quis diam cursus, in aliquam lorem venenatis. Pellentesque feugiat felis eget risus ultrices, pharetra tempor massa placerat. Proin non metus lectus. Vestibulum luctus suscipit mauris, at porttitor odio facilisis in. Vivamus eleifend sapien risus. Phasellus bibendum, tortor id tincidunt cursus, mi dolor facilisis felis, nec iaculis lorem mauris vel tortor. Fusce ullamcorper est fringilla risus semper, at bibendum tortor molestie. Aliquam tempor mi quis nibh suscipit, et facilisis ligula fermentum. Ut condimentum nulla quis fermentum fermentum. Pellentesque felis nisi, fermentum in quam iaculis, cursus porttitor tortor. Suspendisse convallis ligula non odio volutpat, sit amet faucibus diam dignissim. Curabitur ut mauris a erat ultricies tincidunt eu sed nisi. Ut iaculis tortor et dictum lobortis. Donec ut leo enim. Vivamus vitae laoreet risus, ut varius mauris.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae condimentum augue. Suspendisse congue magna quis diam cursus, in aliquam lorem venenatis. Pellentesque feugiat felis eget risus ultrices, pharetra tempor massa placerat. Proin non metus lectus. Vestibulum luctus suscipit mauris, at porttitor odio facilisis in. Vivamus eleifend sapien risus. Phasellus bibendum, tortor id tincidunt cursus, mi dolor facilisis felis, nec iaculis lorem mauris vel tortor. Fusce ullamcorper est fringilla risus semper, at bibendum tortor molestie. Aliquam tempor mi quis nibh suscipit, et facilisis ligula fermentum. Ut condimentum nulla quis fermentum fermentum. Pellentesque felis nisi, fermentum in quam iaculis, cursus porttitor tortor. Suspendisse convallis ligula non odio volutpat, sit amet faucibus diam dignissim. Curabitur ut mauris a erat ultricies tincidunt eu sed nisi. Ut iaculis tortor et dictum lobortis. Donec ut leo enim. Vivamus vitae laoreet risus, ut varius mauris.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae condimentum augue. Suspendisse congue magna quis diam cursus, in aliquam lorem venenatis. Pellentesque feugiat felis eget risus ultrices, pharetra tempor massa placerat. Proin non metus lectus. Vestibulum luctus suscipit mauris, at porttitor odio facilisis in. Vivamus eleifend sapien risus. Phasellus bibendum, tortor id tincidunt cursus, mi dolor facilisis felis, nec iaculis lorem mauris vel tortor. Fusce ullamcorper est fringilla risus semper, at bibendum tortor molestie. Aliquam tempor mi quis nibh suscipit, et facilisis ligula fermentum. Ut condimentum nulla quis fermentum fermentum. Pellentesque felis nisi, fermentum in quam iaculis, cursus porttitor tortor. Suspendisse convallis ligula non odio volutpat, sit amet faucibus diam dignissim. Curabitur ut mauris a erat ultricies tincidunt eu sed nisi. Ut iaculis tortor et dictum lobortis. Donec ut leo enim. Vivamus vitae laoreet risus, ut varius mauris.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae condimentum augue. Suspendisse congue magna quis diam cursus, in aliquam lorem venenatis. Pellentesque feugiat felis eget risus ultrices, pharetra tempor massa placerat. Proin non metus lectus. Vestibulum luctus suscipit mauris, at porttitor odio facilisis in. Vivamus eleifend sapien risus. Phasellus bibendum, tortor id tincidunt cursus, mi dolor facilisis felis, nec iaculis lorem mauris vel tortor. Fusce ullamcorper est fringilla risus semper, at bibendum tortor molestie. Aliquam tempor mi quis nibh suscipit, et facilisis ligula fermentum. Ut condimentum nulla quis fermentum fermentum. Pellentesque felis nisi, fermentum in quam iaculis, cursus porttitor tortor. Suspendisse convallis ligula non odio volutpat, sit amet faucibus diam dignissim. Curabitur ut mauris a erat ultricies tincidunt eu sed nisi. Ut iaculis tortor et dictum lobortis. Donec ut leo enim. Vivamus vitae laoreet risus, ut varius mauris.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae condimentum augue. Suspendisse congue magna quis diam cursus, in aliquam lorem venenatis. Pellentesque feugiat felis eget risus ultrices, pharetra tempor massa placerat. Proin non metus lectus. Vestibulum luctus suscipit mauris, at porttitor odio facilisis in. Vivamus eleifend sapien risus. Phasellus bibendum, tortor id tincidunt cursus, mi dolor facilisis felis, nec iaculis lorem mauris vel tortor. Fusce ullamcorper est fringilla risus semper, at bibendum tortor molestie. Aliquam tempor mi quis nibh suscipit, et facilisis ligula fermentum. Ut condimentum nulla quis fermentum fermentum. Pellentesque felis nisi, fermentum in quam iaculis, cursus porttitor tortor. Suspendisse convallis ligula non odio volutpat, sit amet faucibus diam dignissim. Curabitur ut mauris a erat ultricies tincidunt eu sed nisi. Ut iaculis tortor et dictum lobortis. Donec ut leo enim. Vivamus vitae laoreet risus, ut varius mauris.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae condimentum augue. Suspendisse congue magna quis diam cursus, in aliquam lorem venenatis. Pellentesque feugiat felis eget risus ultrices, pharetra tempor massa placerat. Proin non metus lectus. Vestibulum luctus suscipit mauris, at porttitor odio facilisis in. Vivamus eleifend sapien risus. Phasellus bibendum, tortor id tincidunt cursus, mi dolor facilisis felis, nec iaculis lorem mauris vel tortor. Fusce ullamcorper est fringilla risus semper, at bibendum tortor molestie. Aliquam tempor mi quis nibh suscipit, et facilisis ligula fermentum. Ut condimentum nulla quis fermentum fermentum. Pellentesque felis nisi, fermentum in quam iaculis, cursus porttitor tortor. Suspendisse convallis ligula non odio volutpat, sit amet faucibus diam dignissim. Curabitur ut mauris a erat ultricies tincidunt eu sed nisi. Ut iaculis tortor et dictum lobortis. Donec ut leo enim. Vivamus vitae laoreet risus, ut varius mauris.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae condimentum augue. Suspendisse congue magna quis diam cursus, in aliquam lorem venenatis. Pellentesque feugiat felis eget risus ultrices, pharetra tempor massa placerat. Proin non metus lectus. Vestibulum luctus suscipit mauris, at porttitor odio facilisis in. Vivamus eleifend sapien risus. Phasellus bibendum, tortor id tincidunt cursus, mi dolor facilisis felis, nec iaculis lorem mauris vel tortor. Fusce ullamcorper est fringilla risus semper, at bibendum tortor molestie. Aliquam tempor mi quis nibh suscipit, et facilisis ligula fermentum. Ut condimentum nulla quis fermentum fermentum. Pellentesque felis nisi, fermentum in quam iaculis, cursus porttitor tortor. Suspendisse convallis ligula non odio volutpat, sit amet faucibus diam dignissim. Curabitur ut mauris a erat ultricies tincidunt eu sed nisi. Ut iaculis tortor et dictum lobortis. Donec ut leo enim. Vivamus vitae laoreet risus, ut varius mauris.
            </p>
        </div>
    );
}

export default ModalPage;