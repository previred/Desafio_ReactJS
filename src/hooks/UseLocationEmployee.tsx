import { useEffect, useState } from "react";
import { useHistory, useLocation, useRouteMatch } from "react-router-dom";

const useLoacationEmployee = () => {
  const history = useHistory();
  const { path } = useRouteMatch();
  const location = useLocation();
  const [route, setRoute] = useState("");

  useEffect(() => {
    const param = location.pathname;
    switch (param) {
      case `${path}/create`: {
        setRoute("create");
        break;
      }
      case `${path}/update`: {
        setRoute("update");
        break;
      }
      case `${path}/delete`: {
        setRoute("delete");
        break;
      }
      default: {
        setRoute("list");
        break;
      }
    }
  }, [location]);

  const updateLocation = (key: string) => {
    setRoute(key);
    history.push(`${path}/${key}`);
  };
  return {
    path,
    route,
    updateLocation,
  };
};

export { useLoacationEmployee };
