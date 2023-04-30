type ContainerProps = {
    children: React.ReactNode;
};


export default (names: [String]) => {
    return (
        <div>
            <tr>
                {names.map((item) => (<th>{item}</th>))}
            </tr>
        </div>
    )
}