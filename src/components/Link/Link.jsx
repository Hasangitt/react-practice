

const Link = ({route}) => {
    return (
        <div className="bg-yellow-100 shadow-lg">
            <li className="mr-11"><a href={route.path}>{route.name}</a></li>
        </div>
    );
};

export default Link;