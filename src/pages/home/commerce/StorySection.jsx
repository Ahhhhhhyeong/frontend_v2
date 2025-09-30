import React from 'react';
import Section from '@/components/Section.jsx';
import StoryCard from '@/components/StoryCard.jsx';

export default function StorySection({ farmerStories }) {
  return (
    <Section title='농부의 이야기를 확인해보세요' showMore={true}>
      <div className='space-y-6'>
        {farmerStories.map((story) => (
          <StoryCard key={story.id} story={story} />
        ))}
      </div>
    </Section>
  );
}
