import { RotatingLines } from 'react-loader-spinner';
import { LoaderWrapper } from "./Loaderstyled";


export const Loader = () => {
    return (
       <LoaderWrapper>
          <RotatingLines
            visible={true}
            height="96"
            width="96"
            color="grey"
            strokeWidth="5"
            animationDuration="0.75"
            ariaLabel="rotating-lines-loading"
            />
        </LoaderWrapper>
    )
}