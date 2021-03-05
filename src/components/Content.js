import { IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonContent, IonCard, IonCardHeader, IonCardContent, IonInput, IonItem, IonLabel, IonButton } from '@ionic/react';
import './Content.css';

const Content = () => {
  return (
    <IonContent fullscreen className='container'>
      <IonTitle size='large' className='grid-title'>The Best PlayStation Exclusive Games Ever</IonTitle>

      <IonGrid className='grid'>

        <IonRow>
          <IonCol className='col' size='6'>
            <IonCard className='card card-gow'></IonCard>
          </IonCol>
          <IonCol className='col'>
            <IonCard className='card'>
              <IonCardHeader className='card-header'>God of War (2018)</IonCardHeader>
              <IonCardContent className='card-content'>
                God of War is a third-person action-adventure video game.
                It features an over-the-shoulder free camera, a departure from the previous installments, which featured a fixed cinematic camera (with the exception of 2007's two-dimensional side-scroller Betrayal).
                Cinematographically, the game is presented in a continuous shot, with no camera cuts or loading screens.
                Although the previous main installment, Ascension (2013), introduced multiplayer to the series, this installment is single-player-only.
                Regarding the level structure, director Cory Barlog said "it's open, but it is not an open world."
                Due to its openness, a fast travel feature is unlocked later in the game.
                Swimming, an ability in previous games, was cut; players instead use a boat to traverse bodies of water.
                Unlike previous games, which allowed players to jump freely at anytime, jumping can now only be done at designated areas, such as at a rockface or ledge.
                Throughout the game, players battle Norse mythological foes, like dark elves, wulvers, draugrs,
                as well as Gullveig and the revenants, beings warped by seiðr magic, among many others.
                Valkyries appear as optional boss battles.
                Among the many side quests, players can free the imprisoned dragons Fáfnir, Otr, and Reginn—dwarfs who were turned into dragons—in addition to battling one called Hræzlyr, a story-based boss battle.
              </IonCardContent>
            </IonCard>
          </IonCol>
        </IonRow>

        <IonRow>
          <IonCol size='6' className='col'>
            <IonCard className='card'>
              <IonCardHeader className='card-header'>The Last of Us (2013)</IonCardHeader>
              <IonCardContent className='card-content'>
                The Last of Us is a 2013 action-adventure game developed by Naughty Dog and published by Sony Computer Entertainment.
                Players control Joel, a smuggler tasked with escorting a teenage girl, Ellie, across a post-apocalyptic United States.
                The Last of Us is played from a third-person perspective.
                Players use firearms and improvised weapons, and can use stealth to defend against hostile humans and cannibalistic creatures infected by a mutated fungus in the genus Cordyceps.
                In the online multiplayer mode, up to eight players engage in cooperative and competitive gameplay.
                Development of The Last of Us began in 2009, soon after the release of Naughty Dog's previous game, Uncharted 2: Among Thieves.
                For the first time in the company's history, Naughty Dog split into two teams; while one team developed Uncharted 3: Drake's Deception, the other half developed The Last of Us.
                The relationship between Joel and Ellie became the focus, with all other elements developed around it. Actors Troy Baker and Ashley Johnson portrayed Joel and Ellie respectively through voice and motion capture, and assisted creative director Neil Druckmann with the development of the characters and story.
                The original score was composed and performed by Gustavo Santaolalla.
              </IonCardContent>
            </IonCard>
          </IonCol>
          <IonCol className='col' >
            <IonCard className='card card-tlou'></IonCard>
          </IonCol>
        </IonRow>

        <IonRow>
          <IonCol size='6' className='col'>
            <IonCard className='card card-got'></IonCard>
          </IonCol>
          <IonCol>
            <IonCard className='card'>
              <IonCardHeader className='card-header'>Ghost of Tsushima (2020)</IonCardHeader>
              <IonCardContent className='card-content'>
                Ghost of Tsushima is a 2020 action-adventure game developed by Sucker Punch Productions and published by Sony Interactive Entertainment.
                Featuring an open world, the player controls Jin Sakai, a samurai on a quest to protect Tsushima Island during the first Mongol invasion of Japan.
                The game was released on July 17, 2020 for PlayStation 4. It received praise for its visuals and combat, but was criticized for its open world activities.
                Ghost of Tsushima also earned several award nominations and wins, and sold over 5 million copies as of November 2020.
                Ghost of Tsushima is an action-adventure stealth game played from a third-person perspective.
                The game features a large open world, without waypoints, which can be explored without guidance.
                Players can travel to different parts of the world on horseback. An item that acts as a grappling hook is available to access difficult to reach areas.
                The game features side quests and non-playable characters with which the player can interact.
                A multiplayer mode titled Legends was released in late 2020. Players can complete story missions based on Japanese folklore with another player.
                A horde mode, in which players fight waves of enemies, is also available for a group of four players. A raid was added post-Legends launch.
              </IonCardContent>
            </IonCard>
          </IonCol>
        </IonRow>

      </IonGrid>

      <IonToolbar className='subscribe-toolbar'>
        <IonItem className='subscribe-item' slot='secondary'>
          <IonLabel position='floating' className='subscribe-label'>Email</IonLabel>
          <IonInput type='email' className='subscribe-input'></IonInput>
        </IonItem>        
        <IonButton slot='secondary' size='large' className='subscribe-button'>Subscribe</IonButton>
        <IonToolbar slot='start' className='item'/>
        <IonToolbar slot='end' className='item'/>
      </IonToolbar>

      <IonTitle className='footer'>©2021 Razio Group Test Task</IonTitle>

    </IonContent>
  );
};

export default Content;
