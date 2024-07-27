import { useState, useEffect } from "react";
import { SceneMap } from "react-native-tab-view";
import Lists from "./Lists"; // Import your scene components
import { useGetCategoriesQuery } from "../../services/groceryApi";

interface Route {
  key: string;
  title: string;
}

interface DynamicComponents {
  [key: string]: () => JSX.Element;
}

const TabViewLogic = (width: number) => {
  const { data: categories, error, isLoading } = useGetCategoriesQuery();

  const [index, setIndex] = useState(0);
  const [routes, setRoutes] = useState<Route[]>([]);

  const createDynamicComponents = (routes: Route[]) => {
    return routes.reduce<DynamicComponents>((acc, route) => {
      if (route.key === "all") {
        acc[route.key] = () => <Lists />;
      } else {
        acc[route.key] = () => <Lists categoryId={route.key} />;
      }
      return acc;
    }, {});
  };

  useEffect(() => {
    if (categories) {
      const categoryRoutes = categories.map((category) => ({
        key: category.id,
        title: category.name,
      }));

      setRoutes([{ key: "all", title: "All" }, ...categoryRoutes]);
    }
  }, [categories]);

  const dynamicScenes = createDynamicComponents(routes);

  const renderScene = SceneMap(dynamicScenes);

  return {
    navigationState: { index, routes },
    renderScene,
    onIndexChange: setIndex,
    initialLayout: { width },
  };
};

export default TabViewLogic;