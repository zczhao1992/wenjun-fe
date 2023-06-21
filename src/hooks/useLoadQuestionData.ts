import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useRequest } from "ahooks";
import { useDispatch } from "react-redux";
import { getQuestionService } from "../services/question";
import { resetComponents } from "../store/componentsReducer";
import { resetPageInfo } from "../store/pageInfoReducer";

function useLoadQuestionData() {
  const { id = "" } = useParams();
  const dispatch = useDispatch();

  // const [loading, setLoading] = useState(true)
  // const [questionData, setQuestionData] = useState({})

  const { loading, data, error, run } = useRequest(
    async (id: string) => {
      if (!id) throw new Error("没有问卷 id");
      const data = await getQuestionService(id);
      return data;
    },
    {
      manual: true,
    }
  );

  // 根据获取的data，设置redux store

  useEffect(() => {
    if (!data) return;

    const {
      title = "",
      desc = "",
      js = "",
      css = "",
      isPublished = false,
      componentList = [],
    } = data;

    // 获取默认的 selectedId
    let selectedId = "";
    if (componentList.length > 0) {
      selectedId = componentList[0].fe_id; // 默认选中第一个组件
    }

    // 把 componentList 存储到Redux store 中
    dispatch(
      resetComponents({ componentList, selectedId, copiedComponent: null })
    );

    // 把 pageInfo 存储到 redux store
    dispatch(resetPageInfo({ title, desc, js, css, isPublished }));
  }, [data]);

  // 判断id变化，执行ajax加载数据
  useEffect(() => {
    run(id);
  }, [id]);

  // useEffect(() => {
  //   async function fn() {
  //     const data = await getQuestionService(id)
  //     setQuestionData(data)
  //     setLoading(false)
  //   }
  //   fn()
  // }, [])

  // async function load() {
  //   const data = await getQuestionService(id)
  //   return data
  // }
  // const { loading, data, error } = useRequest(load)

  return { loading, error };
}

export default useLoadQuestionData;
