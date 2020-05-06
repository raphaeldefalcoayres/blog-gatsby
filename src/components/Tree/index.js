import React, { useState } from 'react';
import { uuid } from 'uuidv4';

import TreeItem from './TreeItem';
import {
  Container, TreeItems, Title,
} from './styles';
import TreeParent from './TreeParent';

export default function Tree() {
  const postCategories = [
    { name: 'guide', label: 'Manuais' },
  ];

  const posts = [
    {
      id: uuid(),
      type: 'post',
      category: 'guide',
      title: 'Meu ambiente de desenvolvimento Javascript',
      resume:
        'Neste manual você vai encontrar os principais programas e configurações necessárias para iniciar o desevolvimento moderno de aplicações com javascript.',
      date: toString(new Date('2020-04-29')),
    },

  ];

  const lib = [{
    id: uuid(),
    type: 'lib',
    category: 'video',
    subcategory: 'ReactJS',
    title: 'Introdução ao ReactJS',
  },
  ];


  return (
    <Container>
      <TreeItems>
        {postCategories.map((category) => {
          const treeItems = posts.filter((post) => post.category === category.name);
          const [open, setOpen] = useState(false);

          return (
            <TreeParent data={category} key={category.name} open={open} setOpen={setOpen}>

              {treeItems.map((item) => <TreeItem key={item.id} data={item} />)}

            </TreeParent>
          );
        })}

      </TreeItems>
      <TreeItems>
        <Title>Bibliotéca de conteúdos</Title>
        {lib.length > 0 && lib.map((item) => <TreeItem key={item.id} data={item} />)}
      </TreeItems>
    </Container>
  );
}
