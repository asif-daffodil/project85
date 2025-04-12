import Team from "@/Components/About/Team";
import FidaShopLayout from "@/Layouts/FidaShopLayout";
import { Head } from "@inertiajs/react";

const About = ({auth}) => {
    return (
        <FidaShopLayout auth={auth}>
            <Head title="Fida Shop - About us" />
            <Team />
        </FidaShopLayout>
    );
};

export default About;