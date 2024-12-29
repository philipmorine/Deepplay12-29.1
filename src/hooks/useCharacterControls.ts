import { RefObject, useCallback } from 'react';
import { Character } from '../types/game';

export const useCharacterControls = (characterRef: RefObject<Character>) => {
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    const character = characterRef.current;
    if (!character) return;

    switch (e.key.toLowerCase()) {
      case 'arrowleft':
      case 'a':
        character.velocityX = -5;
        character.direction = 'left';
        break;
      case 'arrowright':
      case 'd':
        character.velocityX = 5;
        character.direction = 'right';
        break;
    }
  }, [characterRef]);

  const handleKeyUp = useCallback((e: KeyboardEvent) => {
    const character = characterRef.current;
    if (!character) return;

    switch (e.key.toLowerCase()) {
      case 'arrowleft':
      case 'arrowright':
      case 'a':
      case 'd':
        character.velocityX = 0;
        break;
    }
  }, [characterRef]);

  const handleClick = useCallback(() => {
    const character = characterRef.current;
    if (!character || character.isJumping) return;

    character.velocityY = -15;
    character.isJumping = true;
  }, [characterRef]);

  return { handleKeyDown, handleKeyUp, handleClick };
};