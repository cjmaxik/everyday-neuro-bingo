<template>
  <q-btn
    dense
    flat
    no-caps
    stretch
    fab-mini
    icon="help"
    @click="aboutToolbar = true"
  />

  <q-dialog v-model="aboutToolbar">
    <q-card>
      <q-toolbar>
        <q-avatar>
          <img src="../assets/gymbag.png">
        </q-avatar>

        <q-toolbar-title>
          Everyday <span class="text-weight-bold">Neuro</span> Bingo
        </q-toolbar-title>
      </q-toolbar>

      <q-card-section>
        <p>
          New Bingo card every day! Watch Neuro-sama's streams and follow along.
        </p>
        <p>
          Created by <a
            ref="noopener noreferrer"
            href="https://cjmaxik.ru"
            target="_blank"
          >CJMAXiK</a> with the help of <a
            ref="noopener noreferrer"
            href="https://discord.gg/neurosama"
            target="_blank"
          >Neurocord</a> and <a
            ref="noopener noreferrer"
            href="https://github.com/cjmaxik/everyday-neuro-bingo/graphs/contributors"
            target="_blank"
          >code contributors</a>.
        </p>
        <hr>
        <p>
          <span class="text-h6">About Neuro-sama</span>
        </p>
        <p>
          Neuro-sama is an AI powered VTuber created by vedal987. She can chat, sing, react to videos, and play games. The
          VTuber side was made in C# (Unity) but all of the AI is done in Python. Neuro-sama was originally made in 2018
          as a bot that just played osu, but has been revived in December of 2022 as a VTuber.
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

      <q-card-actions
        align="right"
        class="text-primary"
      >
        <q-btn
          ref="noopener noreferrer"
          flat
          href="https://github.com/cjmaxik/everyday-neuro-bingo"
          label="Source code"
          no-caps
          target="_blank"
        />
        <q-btn
          v-close-popup
          flat
          label="Close"
          no-caps
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup>
// vue-related
import { ref } from 'vue'

// local refs
const aboutToolbar = ref(false)
</script>
