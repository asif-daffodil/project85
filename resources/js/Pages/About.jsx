import FidaShopLayout from "@/Layouts/FidaShopLayout";
import { Head } from "@inertiajs/react";

const About = ({auth}) => {
    return (
        <FidaShopLayout auth={auth}>
            <Head title="Fida Shop - About us" />
            About us
        </FidaShopLayout>
    );
};

export default About;