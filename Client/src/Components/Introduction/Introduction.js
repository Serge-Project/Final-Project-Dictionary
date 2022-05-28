import * as React from 'react';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import '../Introduction/Introduction.css'

const Root = styled('div')(({ theme }) => ({
  width: '100%',
  ...theme.typography.body2,
  '& > :not(style) + :not(style)': {
    marginTop: theme.spacing(2),
  },
}));

export default function DividerText() {
  const content = (
    <div className='TextIntro'>
      {`YourDictionary’s mission is to provide you with word meanings
       that are easy to digest and written in clear, simple language. 
       A dictionary is meant to be a tool to help you better understand a word
        you may not have come across before, and that’s exactly what YourDictionary 
        has been built to be. YourDictionary provides definitions from respected sources, 
        parts of speech for each definition, clear sentence examples to help you further 
        understand the meaning of a word, and word origins to help you better break it down. 
        With these benefits, plus an easy audible pronunciation feature and resources
         inviting you to dive deeper into certain words, YourDictionary lives up to its name: 
         it’s a dictionary made for you.`}
    </div>
  );

  return (
    <Root>
      
      <Divider textAlign="left"><p>FEATURE</p></Divider>
      {content}
     
    </Root>
  );
}


