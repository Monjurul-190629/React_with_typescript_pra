import useAbout from "../Provider/AboutHook";


const About = () => {
    const some = useAbout();

    
    return (
        <div>
            Hello! About us
            <br/>
            {some.company}'s serial is {some.serial} and year is {some.year}
        </div>
    );
};

export default About;