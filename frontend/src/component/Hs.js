import MyCard from './MyCard';

function App() {
  const cardData = [
    {
      title: 'Card 1',
      content: 'This is card 1 content',
    },
    {
      title: 'Card 2',
      content: 'This is card 2 content',
    },
  ];

  return (
    <div style={{marginTop:'100px'}}>
      {cardData.map((card) => (
        <MyCard key={card.title} title={card.title} content={card.content} />
      ))}
    </div>
  );
}

export default App;
