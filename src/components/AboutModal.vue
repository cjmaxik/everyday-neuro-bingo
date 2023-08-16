<template>
  <q-card>
    <q-toolbar v-show="!isIndex">
      <q-avatar>
        <img src="/assets/images/gymbag.png">
      </q-avatar>

      <q-toolbar-title class="text-center">
        Everyday <span class="text-weight-bold">Neuro</span> Bingo
      </q-toolbar-title>

      <q-btn
        v-close-popup
        dense
        flat
        icon="close"
        round
      />
    </q-toolbar>

    <HowToPlayPanel v-if="!isIndex" />

    <q-card-section>
      <p class="no-margin">
        Brought to you by:
      </p>
      <ul class="text-left q-mt-none">
        <li>
          <a
            ref="noopener noreferrer"
            href="https://cjmaxik.ru?ref=neuro-bingo"
            target="_blank"
          >CJMAXiK</a> - Lead Developer
        </li>
        <li>
          <a
            ref="noopener noreferrer"
            href="https://discord.com/users/215881919206785024?ref=neuro-bingo"
            target="_blank"
          >tioopental</a> - Lead Prompt Editor
        </li>
      </ul>

      <p>
        Includes art by Rune, 2Pfrog, niceaccoun, lingyou, anny, Beyumi, M3gur3n, Kaz, shouu_kyun, dmaxcustom,
        MapleNephthys, Bungee, why, mmeizterr, DarkShowArt, merryhime, Laroche, Redston, Kat Taiger, Berry, SomeOldGuy,
        and other distinguished&nbsp;artists.<br>Source code is available on <a
          ref="noopener noreferrer"
          href="https://github.com/cjmaxik/everyday-neuro-bingo?ref=neuro-bingo"
          target="_blank"
        >GitHub</a>.
      </p>

      <hr>

      <p class="text-center">
        <span class="text-gymbag text-bold">Neuro-sama</span> is an AI-powered VTuber created by <a
          ref="noopener noreferrer"
          href="https://vedal.xyz/?ref=neuro-bingo"
          target="_blank"
        >Vedal</a>. She can chat,
        sing, react to videos, and play games.
      </p>

      <p>
        <q-btn-group spread>
          <q-btn
            ref="noopener noreferrer"
            dense
            href="https://www.twitch.tv/vedal987?ref=neuro-bingo"
            label="Twitch"
            no-caps
            style="background-color: #6441a5;"
            target="_blank"
            text-color="white"
          />
          <q-btn
            ref="noopener noreferrer"
            dense
            href="https://www.youtube.com/@Neurosama?ref=neuro-bingo"
            label="YouTube"
            no-caps
            style="background-color: #c4302b;"
            target="_blank"
            text-color="white"
          />
        </q-btn-group>

        <q-btn-group spread>
          <q-btn
            ref="noopener noreferrer"
            dense
            href="https://twitter.com/NeurosamaAI?ref=neuro-bingo"
            label="@NeurosamaAI"
            no-caps
            style="background-color: #00acee;"
            target="_blank"
            text-color="white"
          />
          <q-btn
            ref="noopener noreferrer"
            dense
            href="https://twitter.com/Vedal987?ref=neuro-bingo"
            label="@vedal987"
            no-caps
            style="background-color: #1DA1F2;"
            target="_blank"
            text-color="white"
          />
        </q-btn-group>
      </p>
    </q-card-section>
  </q-card>
</template>

<script setup>
// @ts-check

import HowToPlayPanel from './HowToPlayPanel.vue'

defineProps({
  isIndex: {
    type: Boolean,
    default: false
  }
})
</script>
