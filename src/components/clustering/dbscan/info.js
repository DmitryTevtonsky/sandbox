/* eslint-disable react/prop-types */
/* eslint-disable no-console */
import React from 'react';
import { Typography } from 'antd';

const { Title, Paragraph, Text } = Typography;

const DbscanInfoComponent = () => {
  return (
    <div className="info">
      <Title level={3}>Кластеризация DBSCAN</Title>
      <Paragraph>
        Это алгоритм кластеризации, основанной на плотности — если дан набор
        точек в некотором пространстве, алгоритм группирует вместе точки,
        которые тесно расположены, помечая как выбросы точки, которые находятся
        одиноко в областях с малой плотностью (ближайшие соседи которых лежат
        далеко).
      </Paragraph>
      <Title level={4}>Алгоритм</Title>
      <Paragraph>
        DBSCAN требует задания двух параметров: epsilon и минимального числа
        точек, которые должны образовывать плотную область (minPts).
        <Paragraph>
          Алгоритм начинается с произвольной точки, которая ещё не
          просматривалась. Выбирается epsilon - окрестность точки и, если она
          содержит достаточно много точек, образуется кластер, в противном
          случае точка помечается как шум.
        </Paragraph>
        <Paragraph>
          Заметим, что эта точка может быть позже найдена в epsilon -
          окрестности другой точки и включена в какой-то кластер. Если точка
          найдена как плотная точка кластера, её epsilon - окрестность также
          является частью этого кластера.
        </Paragraph>
        <Paragraph>
          Следовательно, все точки, найденные в epsilon - окрестности этой
          точки, добавляются к кластеру. Этот процесс продолжается, пока не
          будет найден связный по плотности кластер. Затем выбирается и
          обрабатывается новая непосещённая точка, что ведёт к обнаружению
          следующего кластера или шума.
        </Paragraph>
      </Paragraph>
      <Title level={4}>Преимущества</Title>
      <Paragraph>
        <ul>
          <li>
            DBSCAN не требует спецификации числа кластеров в данных в отличие от
            метода k-средних.
          </li>
          <li>
            DBSCAN может найти кластеры произвольной формы. Он может найти даже
            кластеры полностью окружённые (но не связанные с) другими
            кластерами. Благодаря параметру MinPts уменьшается так называемый
            эффект одной связи (связь различных кластеров тонкой линией точек).
          </li>
          <li>DBSCAN имеет понятие шума и устойчив к выбросам.</li>
          <li>
            DBSCAN требует лишь двух параметров и большей частью нечувствителен
            к порядку точек в базе данных.
          </li>
          <li>
            Параметры minPts и epsilon могут быть установлены экспертами в
            рассматриваемой области, если данные хорошо понимаются.
          </li>
        </ul>
      </Paragraph>
      <Title level={4}>Недостатки</Title>
      <Paragraph>
        <ul>
          <li>
            DBSCAN не полностью однозначен — краевые точки, которые могут быть
            достигнуты из более чем одного кластера, могут принадлежать любому
            из этих кластеров, что зависит от порядка просмотра точек.
          </li>
          <li>
            Качество DBSCAN зависит от измерения расстояния, используемого в
            функции regionQuery(P,ε). Наиболее часто используемой метрикой
            расстояний является евклидова метрика. Особенно для кластеризации
            данных высокой размерности[en] эта метрика может оказаться почти
            бесполезной ввиду так называемого «проклятия размерности», что
            делает трудным делом нахождение подходящего значения epsilon . Этот
            эффект, однако, присутствует в любом другом алгоритме, основанном на
            евклидовом расстоянии.
          </li>
          <li>
            DBSCAN не может хорошо кластеризовать наборы данных с большой
            разницей в плотности, поскольку не удается выбрать приемлемую для
            всех кластеров комбинацию minPts-epsilon
          </li>
          <li>
            Если данные и масштаб не вполне хорошо поняты, выбор осмысленного
            порога расстояния epsilon может оказаться трудным.
          </li>
        </ul>
      </Paragraph>
    </div>
  );
};

export default DbscanInfoComponent;
