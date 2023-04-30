import Table from "./Table";

type ContainerProps = {
    children: React.ReactNode; //👈 children prop typr
};

export default (props: ContainerProps) => {
    return (
        <div>
            <table>
                {props.children}
            </table>

        </div>
    )


}