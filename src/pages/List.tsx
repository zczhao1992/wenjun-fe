import React, { FC, useState } from 'react';
import QuestionCard from '../components/QuestionCard';
import styles from './List.module.scss';

const rawQuestionList = [
  {
    id: 'q1',
    title: '问卷1',
    isPublished: false,
    isStar: false,
    answerCount: 5,
    createAt: '3月10日 12:23',
  },
  {
    id: 'q2',
    title: '问卷2',
    isPublished: true,
    isStar: false,
    answerCount: 5,
    createAt: '3月10日 12:23',
  },
  {
    id: 'q3',
    title: '问卷3',
    isPublished: false,
    isStar: false,
    answerCount: 5,
    createAt: '3月10日 12:23',
  },
  {
    id: 'q4',
    title: '问卷4',
    isPublished: true,
    isStar: false,
    answerCount: 5,
    createAt: '3月10日 12:23',
  },
];

const List: FC = () => {
  const [questionList, setQuestionList] = useState(rawQuestionList);

  return (
    <>
      <p>List</p>
    </>
  );
};

export default List;
