import React from 'react';
import {useSearchUsersQuery} from "../../store/github/github.api";
import "./HomePage.css";

interface IHomeProps{
    text: string
}

const HomePage = ({text="ReAct"}:IHomeProps) => {
  const {isLoading, isError, data} = useSearchUsersQuery("vladilen")

    return (
        <div>
          {isLoading && <div className="flex justify-center items-center">Loading...</div>}
          {isError && <div className="flex justify-center items-center text-red-700">Error</div>}
          {
            data?.items && data.items.length &&
            data.items.map(user => (
              <div key={user.id} className="flex justify-start items-center my-2">
                <img alt="" src={user.avatar_url} className="avatar mx-2 "/>
                {user.login}
              </div>
            ))
          }
        </div>
    );
};

export default HomePage;